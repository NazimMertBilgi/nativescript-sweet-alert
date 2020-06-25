import { Component } from "@angular/core";
import { SweetAlert } from "nativescript-sweet-alert";
import { ShowCustomImage, ShowWarning, ShowSuccess, ShowError, ShowNormal, ShowText, ShowCheckbox, SweetAlertDialogTypes } from 'nativescript-sweet-alert/classes';
import * as application from "tns-core-modules/application";

const Toast = android.widget.Toast;
const context = application.android.startActivity;

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent {

    showNormal() {
        const options: ShowNormal = {
            text: "Merhaba",
            contentText: "İlk Alert Denemesi",
            confirmButtonText: "Tamam",
            cancelButtonText: "Kapat",
            successMessageText: "Başarılı!",
            successMessageContentText: "Başarıyla tamamlandı.",
            successMessageButtonText: "Kapat"
        }
        SweetAlert.showNormal(options).then(value => {
            Toast.makeText(context, "result: " + value, Toast.LENGTH_SHORT).show();
        });
    }

    showError() {
        const options: ShowError = {
            text: "Merhaba",
            contentText: "İlk Alert Denemesi",
            confirmButtonText: "Tamam",
            cancelButtonText: "Kapatt"
        }
        SweetAlert.showError(options).then(value => {
            Toast.makeText(context, "result: " + value, Toast.LENGTH_SHORT).show();
        });
    }

    showSuccess() {
        const options: ShowSuccess = {
            text: "Merhaba",
            contentText: "İlk Alert Denemesi",
            confirmButtonText: "Tamam",
            cancelButtonText: "Kapat"
        }
        SweetAlert.showSuccess(options).then(value => {
            Toast.makeText(context, "result: " + value, Toast.LENGTH_SHORT).show();
        });
    }

    showWarning() {
        const options: ShowWarning = {
            text: "Merhaba",
            contentText: "İlk Alert Denemesi",
            confirmButtonText: "Tamam",
            cancelButtonText: "Kapat"
        }
        SweetAlert.showWarning(options).then(value => {
            Toast.makeText(context, "result: " + value, Toast.LENGTH_SHORT).show();
        });
    }

    showCustomImage() {
        const options: ShowCustomImage = {
            imagePath: "~/assets/images/nmb.jpeg",
            text: "Merhaba",
            contentText: "Big <font color='green'>green </font><b><i> bold</i></b>",
            confirmButtonText: "Tamam",
            cancelButtonText: "Kapat"
        }
        SweetAlert.showCustomImage(options).then(value => {
            Toast.makeText(context, "result: " + value, Toast.LENGTH_SHORT).show();
        });
    }

    showDarkMode() {
        const options: ShowSuccess = {
            text: "Merhaba",
            contentText: "İlk Alert Denemesi",
            confirmButtonText: "Tamam",
            cancelButtonText: "Kapat",
            darkMode: true
        }
        SweetAlert.showSuccess(options).then(value => {
            Toast.makeText(context, "result: " + value, Toast.LENGTH_SHORT).show();
        });
    }

    showText() {
        const options: ShowText = {
            text: "Merhaba",
            confirmButtonText: "Tamam",
            cancelButtonText: "Kapat",
            textViewText: "I'm text field.",
            customImage: "~/assets/images/nmb.jpeg"
        }
        SweetAlert.showText(options).then(value => {
            Toast.makeText(context, "result: " + value, Toast.LENGTH_SHORT).show();
        });
    }

    showCheckbox() {
        const options: ShowCheckbox = {
            text: "Merhaba",
            checkBoxChecked: true,
            checkBoxText: "Notification Sound",
            confirmButtonText: "Tamam",
            cancelButtonText: "Kapat",
            customImage: SweetAlertDialogTypes.SUCCESS_TYPE
        }
        SweetAlert.showCheckbox(options).then(value => {
            Toast.makeText(context, "result: " + value, Toast.LENGTH_SHORT).show();
        });
    }
}
