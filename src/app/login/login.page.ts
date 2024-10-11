import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonButton, IonText } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonText, IonButton, IonInput, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule] // Asegúrate de incluir ReactiveFormsModule aquí
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loginError: boolean = false;

  private hardcodedEmail: String = 'usuario@ejemplo.com';
  private hardcodedPassword: string = 'password123';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    
  }

  login() {
    const { email, password } = this.loginForm.value;

    if (email === this.hardcodedEmail && password === this.hardcodedPassword) {
      this.loginError = false;
      this.router.navigate(['/home']);
    } else {
      this.loginError = true;
    }
  }
}
