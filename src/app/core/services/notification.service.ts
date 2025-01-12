import {inject, Injectable} from "@angular/core";
import {ConfirmationService, MessageService} from "primeng/api";

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    private confirmationService = inject(ConfirmationService);
    private messageService = inject(MessageService);

    showConfirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Tem certeza que deseja excluir o registro?',
            header: 'Atenção',
            icon: 'pi pi-exclamation-circle'
        });
    }

    closeDialog(): void {
        this.confirmationService.close();
    }

    showToast(severity: 'success' | 'error' | 'warn' | 'info', title: string, text: string, timeout: number = 0): void {
        this.messageService.add({severity: severity, summary: title, detail: text, life: timeout});
        this.closeDialog();
    }

    showSuccess(text: string, timeout?: number): void {
        this.showToast('success', 'Sucesso', text, timeout);
    }

    showError(text: string, timeout?: number): void {
        this.showToast('error', 'Erro', text, timeout);
    }

    showInfo(text: string, timeout?: number): void {
        this.showToast('info', 'Info', text, timeout);
    }

    showWarn(text: string, timeout?: number): void {
        this.showToast('warn', 'Aviso', text, timeout);
    }

}
