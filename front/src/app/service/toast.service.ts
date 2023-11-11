import {Injectable} from "@angular/core";
import Swal from 'sweetalert2'

type IconType = 'success' | 'error' | 'warning' | 'info' | 'question';

@Injectable({providedIn: 'root'})
export class ToastService {
  private toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    showClass: {
      popup: '',
      backdrop: '',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: '',
      backdrop: '',
      icon: 'swal2-icon-hide'
    },
    onOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  constructor() {}

  public viewMsg(title: string, icon: IconType) {
    this.toast.fire({
      icon,
      title
    });
  }
}
