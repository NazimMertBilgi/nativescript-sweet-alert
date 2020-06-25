import { SweetAlert } from 'nativescript-sweet-alert';

import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { HomeViewModel } from "./home-view-model";
import { ShowCustomImage, ShowWarning, ShowSuccess, ShowError, ShowNormal, ShowText, ShowCheckbox, SweetAlertDialogTypes } from 'nativescript-sweet-alert/classes';
import * as application from "tns-core-modules/application";

const Toast = android.widget.Toast;
const context = application.android.startActivity;

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();
}

export function showNormal() {
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

export function showError() {
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

export function showSuccess() {
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

export function showWarning() {
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

export function showCustomImage() {
    const options: ShowCustomImage = {
        imagePath: "~/assets/images/nmb.jpeg",
        text: "Merhaba",
        contentText: "Big <font color='green'>green </font><b><i> bold</i></b>",
        confirmButtonText:"Tamam",
        cancelButtonText: "Kapat"
    }
    SweetAlert.showCustomImage(options).then(value => {
        Toast.makeText(context, "result: " + value, Toast.LENGTH_SHORT).show();
    });
}

export function showDarkMode() {
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

export function showText() {
    const options: ShowText = {
        text: "Merhaba",
        confirmButtonText: "Tamam",
        cancelButtonText: "Kapat",
        textViewText:"I'm text field.",
        customImage: "~/assets/images/nmb.jpeg"
    }
    SweetAlert.showText(options).then(value => {
        Toast.makeText(context, "result: " + value, Toast.LENGTH_SHORT).show();
    });
}

export function showCheckbox() {
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