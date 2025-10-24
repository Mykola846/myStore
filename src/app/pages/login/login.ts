import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string = '';
  isLoginMode: boolean = true;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onSubmit() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Пожалуйста, заполните все поля';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    try {
      if (this.isLoginMode) {
        await this.authService.login(this.email, this.password);
        this.router.navigate(['/products']);
      } else {
        await this.authService.register(this.email, this.password);
        this.router.navigate(['/products']);
      }
    } catch (error: any) {
      this.errorMessage = this.getErrorMessage(error.code);
    } finally {
      this.loading = false;
    }
  }

  async signInWithGoogle() {
    this.loading = true;
    this.errorMessage = '';

    try {
      await this.authService.signInWithGoogle();
      this.router.navigate(['/products']);
    } catch (error: any) {
      this.errorMessage = this.getErrorMessage(error.code);
    } finally {
      this.loading = false;
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = '';
  }

  private getErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'Пользователь не найден';
      case 'auth/wrong-password':
        return 'Неверный пароль';
      case 'auth/email-already-in-use':
        return 'Этот email уже используется';
      case 'auth/weak-password':
        return 'Пароль слишком слабый';
      case 'auth/invalid-email':
        return 'Неверный формат email';
      case 'auth/popup-closed-by-user':
        return 'Окно входа было закрыто';
      case 'auth/popup-blocked':
        return 'Всплывающее окно заблокировано браузером';
      default:
        return 'Произошла ошибка. Попробуйте еще раз';
    }
  }
}
