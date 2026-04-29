from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    ROLE_CHOICES = (
        ('faculty', 'Faculty'),
        ('student', 'Student'),
        ('parent', 'Parent'),
        ('admin', 'Admin'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='student')
    user_id_prefix = models.CharField(max_length=10, blank=True, null=True)

class StudentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student_profile')
    enrollment_number = models.CharField(max_length=50, unique=True)
    grade_class = models.CharField(max_length=50)
    parent_contact = models.CharField(max_length=15)
    
    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name} ({self.enrollment_number})"

class TeacherProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='teacher_profile')
    employee_id = models.CharField(max_length=50, unique=True)
    department = models.CharField(max_length=100)
    
    def __str__(self):
        return f"Prof. {self.user.last_name}"

class Attendance(models.Model):
    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=10, choices=(('Present', 'Present'), ('Absent', 'Absent')))
    marked_by = models.ForeignKey(TeacherProfile, on_delete=models.SET_NULL, null=True)
    
    # Logic for Twilio/Message91 notification on 'Absent' would be in a Django Signal or save override

class Result(models.Model):
    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE)
    subject = models.CharField(max_length=100)
    marks_obtained = models.DecimalField(max_digits=5, decimal_places=2)
    total_marks = models.DecimalField(max_digits=5, decimal_places=2)
    grade = models.CharField(max_length=2)
    published = models.BooleanField(default=False)

class Notice(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    target_role = models.CharField(max_length=20, choices=User.ROLE_CHOICES, default='student')
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE)

class Resource(models.Model):
    RESOURCE_TYPES = (
        ('note', 'Document/Note'),
        ('recording', 'Class Recording'),
    )
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    resource_type = models.CharField(max_length=20, choices=RESOURCE_TYPES)
    file_url = models.URLField() # Or models.FileField(upload_to='resources/')
    uploaded_by = models.ForeignKey(TeacherProfile, on_delete=models.CASCADE)
    uploaded_at = models.DateTimeField(auto_now_add=True)

class LiveClass(models.Model):
    title = models.CharField(max_length=200)
    scheduled_time = models.DateTimeField()
    meeting_link = models.URLField()
    hosted_by = models.ForeignKey(TeacherProfile, on_delete=models.CASCADE)
