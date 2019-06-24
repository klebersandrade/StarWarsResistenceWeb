import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  constructor(private messageService: MessageService) { }

  msgSuccess(title: string, msg: string) {
    this.messageService.add({
      severity: 'success',
      summary: title,
      detail: msg,
    });
  }

  msgErro(title: string, msg: string) {
    this.messageService.add({
      severity: 'error',
      summary: title,
      detail: msg,
    });
  }

  msgInfo(title: string, msg: string) {
    this.messageService.add({
      severity: 'info',
      summary: title,
      detail: msg,
    });
  }

  msgWarn(title: string, msg: string) {
    this.messageService.add({
      severity: 'warn',
      summary: title,
      detail: msg,
    });
  }
}
