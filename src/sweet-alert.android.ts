import * as application from "tns-core-modules/application";
import * as types from "tns-core-modules/utils/types";
import * as fs from "tns-core-modules/file-system";
import { ShowCustomImage, ShowWarning, ShowSuccess, ShowError, ShowNormal, ShowText, ShowCheckbox } from "./classes";
import { isNumber } from "tns-core-modules/utils/types";

declare const cn: any;

export enum SweetAlertDialogTypes {
    NORMAL_TYPE = 0,
    ERROR_TYPE = 1,
    SUCCESS_TYPE = 2,
    WARNING_TYPE = 3,
    CUSTOM_IMAGE_TYPE = 4
    // PROGRESS_TYPE = 5 // Coming Soon
}

export class SweetAlert {

    public static showNormal(options: ShowNormal): Promise<any> {

        const context = application.android.startActivity;

        return new Promise((resolve, reject) => {

            cn.pedant.SweetAlert.SweetAlertDialog.DARK_STYLE = options.darkMode;

            let pDialog = new cn.pedant.SweetAlert.SweetAlertDialog(context, SweetAlertDialogTypes.NORMAL_TYPE);
            pDialog.setTitleText(options.text);
            pDialog.setContentText(options.contentText);

            if (options.confirmButtonText) {
                pDialog.setConfirmText(options.confirmButtonText);
                pDialog.setConfirmClickListener(new cn.pedant.SweetAlert.SweetAlertDialog.OnSweetClickListener({
                    onClick: (sDialog) => {
                        sDialog.dismissWithAnimation();
                        if (options.successMessageText) {
                            pDialog = new cn.pedant.SweetAlert.SweetAlertDialog(context, SweetAlertDialogTypes.NORMAL_TYPE);
                            pDialog
                                .setTitleText(options.successMessageText)
                                .setContentText(options.successMessageContentText)
                                .setConfirmText(options.successMessageButtonText)
                                .setConfirmClickListener(null)
                                .changeAlertType(SweetAlertDialogTypes.SUCCESS_TYPE);

                            pDialog.show();
                        }
                        else {
                            sDialog.dismissWithAnimation();
                        }
                        resolve(true);
                    }
                }))
            }
            else {
                pDialog.hideConfirmButton();
            }

            if (options.cancelButtonText) {
                pDialog.setCancelText(options.cancelButtonText);
                pDialog.setCancelClickListener(new cn.pedant.SweetAlert.SweetAlertDialog.OnSweetClickListener({
                    onClick: (sDialog) => {
                        sDialog.dismissWithAnimation();
                        resolve("CLOSED");
                    }
                }));
            }


            pDialog.show();

        });
    }

    public static showError(options: ShowError): Promise<any> {

        const context = application.android.startActivity;

        return new Promise((resolve, reject) => {

            cn.pedant.SweetAlert.SweetAlertDialog.DARK_STYLE = options.darkMode;

            let pDialog = new cn.pedant.SweetAlert.SweetAlertDialog(context, SweetAlertDialogTypes.ERROR_TYPE);
            pDialog.setTitleText(options.text);
            pDialog.setContentText(options.contentText);

            if (options.confirmButtonText) {
                pDialog.setConfirmText(options.confirmButtonText);
                pDialog.setConfirmClickListener(new cn.pedant.SweetAlert.SweetAlertDialog.OnSweetClickListener({
                    onClick: (sDialog) => {
                        sDialog.dismissWithAnimation();
                        if (options.successMessageText) {
                            pDialog = new cn.pedant.SweetAlert.SweetAlertDialog(context, SweetAlertDialogTypes.ERROR_TYPE);
                            pDialog
                                .setTitleText(options.successMessageText)
                                .setContentText(options.successMessageContentText)
                                .setConfirmText(options.successMessageButtonText)
                                .setConfirmClickListener(null)
                                .changeAlertType(SweetAlertDialogTypes.SUCCESS_TYPE);

                            pDialog.show();
                        }
                        else {
                            sDialog.dismissWithAnimation();
                        }
                        resolve(true);
                    }
                }))
            }
            else {
                pDialog.hideConfirmButton();
            }

            if (options.cancelButtonText) {
                pDialog.setCancelText(options.cancelButtonText);
                pDialog.setCancelClickListener(new cn.pedant.SweetAlert.SweetAlertDialog.OnSweetClickListener({
                    onClick: (sDialog) => {
                        sDialog.dismissWithAnimation();
                        resolve("CLOSED");
                    }
                }));
            }



            pDialog.show();

        });
    }

    public static showSuccess(options: ShowSuccess): Promise<any> {

        const context = application.android.startActivity;

        return new Promise((resolve, reject) => {

            cn.pedant.SweetAlert.SweetAlertDialog.DARK_STYLE = options.darkMode;

            let pDialog = new cn.pedant.SweetAlert.SweetAlertDialog(context, SweetAlertDialogTypes.SUCCESS_TYPE);
            pDialog.setTitleText(options.text);
            pDialog.setContentText(options.contentText);

            if (options.confirmButtonText) {
                pDialog.setConfirmText(options.confirmButtonText);
                pDialog.setConfirmClickListener(new cn.pedant.SweetAlert.SweetAlertDialog.OnSweetClickListener({
                    onClick: (sDialog) => {
                        sDialog.dismissWithAnimation();
                        if (options.successMessageText) {
                            pDialog = new cn.pedant.SweetAlert.SweetAlertDialog(context, SweetAlertDialogTypes.SUCCESS_TYPE);
                            pDialog
                                .setTitleText(options.successMessageText)
                                .setContentText(options.successMessageContentText)
                                .setConfirmText(options.successMessageButtonText)
                                .setConfirmClickListener(null)
                                .changeAlertType(SweetAlertDialogTypes.SUCCESS_TYPE);

                            pDialog.show();
                        }
                        else {
                            sDialog.dismissWithAnimation();
                        }
                        resolve(true);
                    }
                }))
            }
            else {
                pDialog.hideConfirmButton();
            }

            if (options.cancelButtonText) {
                pDialog.setCancelText(options.cancelButtonText);
                pDialog.setCancelClickListener(new cn.pedant.SweetAlert.SweetAlertDialog.OnSweetClickListener({
                    onClick: (sDialog) => {
                        sDialog.dismissWithAnimation();
                        resolve("CLOSED");

                    }
                }));
            }


            pDialog.show();

        });
    }

    public static showWarning(options: ShowWarning): Promise<any> {

        const context = application.android.startActivity;

        return new Promise((resolve, reject) => {

            cn.pedant.SweetAlert.SweetAlertDialog.DARK_STYLE = options.darkMode;

            let pDialog = new cn.pedant.SweetAlert.SweetAlertDialog(context, SweetAlertDialogTypes.WARNING_TYPE);
            pDialog.setTitleText(options.text);
            pDialog.setContentText(options.contentText);

            if (options.confirmButtonText) {
                pDialog.setConfirmText(options.confirmButtonText);
                pDialog.setConfirmClickListener(new cn.pedant.SweetAlert.SweetAlertDialog.OnSweetClickListener({
                    onClick: (sDialog) => {
                        sDialog.dismissWithAnimation();
                        if (options.successMessageText) {
                            pDialog = new cn.pedant.SweetAlert.SweetAlertDialog(context, SweetAlertDialogTypes.WARNING_TYPE);
                            pDialog
                                .setTitleText(options.successMessageText)
                                .setContentText(options.successMessageContentText)
                                .setConfirmText(options.successMessageButtonText)
                                .setConfirmClickListener(null)
                                .changeAlertType(SweetAlertDialogTypes.SUCCESS_TYPE);

                            pDialog.show();
                        }
                        else {
                            sDialog.dismissWithAnimation();
                        }
                        resolve(true);
                    }
                }))
            }
            else {
                pDialog.hideConfirmButton();
            }

            if (options.cancelButtonText) {
                pDialog.setCancelText(options.cancelButtonText);
                pDialog.setCancelClickListener(new cn.pedant.SweetAlert.SweetAlertDialog.OnSweetClickListener({
                    onClick: (sDialog) => {
                        sDialog.dismissWithAnimation();
                        resolve("CLOSED");
                    }
                }));
            }


            pDialog.show();

        });
    }

    public static showCustomImage(options: ShowCustomImage): Promise<any> {

        const context = application.android.startActivity;

        return new Promise((resolve, reject) => {

            cn.pedant.SweetAlert.SweetAlertDialog.DARK_STYLE = options.darkMode;

            let pDialog = new cn.pedant.SweetAlert.SweetAlertDialog(context, SweetAlertDialogTypes.CUSTOM_IMAGE_TYPE);

            var fileName = types.isString(options.imagePath) ? options.imagePath.trim() : "";
            if (fileName.indexOf("~/") === 0) {
                fileName = fs.path.join(fs.knownFolders.currentApp().path, fileName.replace("~/", ""));
            }

            const bitmap = android.graphics.BitmapFactory.decodeFile(fileName, null);

            pDialog.setCustomImage(new android.graphics.drawable.BitmapDrawable(application.android.context.getResources(), bitmap))

            if (options.text) {
                pDialog.setTitleText(options.text);
            }
            if (options.contentText) {
                pDialog.setContentText(options.contentText);
            }

            if (options.confirmButtonText) {
                pDialog.setConfirmText(options.confirmButtonText);
                pDialog.setConfirmClickListener(new cn.pedant.SweetAlert.SweetAlertDialog.OnSweetClickListener({
                    onClick: (sDialog) => {
                        sDialog.dismissWithAnimation();
                        if (options.successMessageText) {
                            pDialog = new cn.pedant.SweetAlert.SweetAlertDialog(context, SweetAlertDialogTypes.CUSTOM_IMAGE_TYPE);
                            pDialog
                                .setTitleText(options.successMessageText)
                                .setContentText(options.successMessageContentText)
                                .setConfirmText(options.successMessageButtonText)
                                .setConfirmClickListener(null)
                                .changeAlertType(SweetAlertDialogTypes.SUCCESS_TYPE);

                            pDialog.show();
                        }
                        else {
                            sDialog.dismissWithAnimation();
                        }
                        resolve(true);
                    }
                }))
            }
            else {
                pDialog.hideConfirmButton();
            }

            if (options.cancelButtonText) {
                pDialog.setCancelText(options.cancelButtonText);
                pDialog.setCancelClickListener(new cn.pedant.SweetAlert.SweetAlertDialog.OnSweetClickListener({
                    onClick: (sDialog) => {
                        sDialog.dismissWithAnimation();
                        resolve("CLOSED");
                    }
                }));
            }


            pDialog.show();

        });
    }

    public static showText(options: ShowText): Promise<any> {

        const context = application.android.startActivity;

        return new Promise((resolve, reject) => {

            cn.pedant.SweetAlert.SweetAlertDialog.DARK_STYLE = options.darkMode;

            let dialogType: any = SweetAlertDialogTypes.NORMAL_TYPE;
            if (options.customImage) {
                if (isNumber(options.customImage)) {
                    dialogType = options.customImage;
                }
                else {
                    dialogType = SweetAlertDialogTypes.CUSTOM_IMAGE_TYPE;
                }
            }

            let pDialog = new cn.pedant.SweetAlert.SweetAlertDialog(context, dialogType);
            pDialog.setTitleText(options.text);

            if (dialogType === SweetAlertDialogTypes.CUSTOM_IMAGE_TYPE) {
                var fileName = types.isString(options.customImage) ? options.customImage.toString().trim() : "";
                if (fileName.indexOf("~/") === 0) {
                    fileName = fs.path.join(fs.knownFolders.currentApp().path, fileName.replace("~/", ""));
                }

                const bitmap = android.graphics.BitmapFactory.decodeFile(fileName, null);

                pDialog.setCustomImage(new android.graphics.drawable.BitmapDrawable(application.android.context.getResources(), bitmap))
            }

            const editText: android.widget.EditText = new android.widget.EditText(context);
            editText.setText(options.textViewText);
            // editText.addTextChangedListener(new android.text.TextWatcher({
            //     beforeTextChanged: (value) => { },
            //     afterTextChanged: () => { },
            //     onTextChanged: (value, start, before, count) => {
            //         console.log(value);
            //     }
            // }));

            pDialog.setCustomView(editText);

            if (options.confirmButtonText) {
                pDialog.setConfirmText(options.confirmButtonText);
                pDialog.setConfirmClickListener(new cn.pedant.SweetAlert.SweetAlertDialog.OnSweetClickListener({
                    onClick: (sDialog) => {
                        sDialog.dismissWithAnimation();
                        if (options.successMessageText) {
                            pDialog = new cn.pedant.SweetAlert.SweetAlertDialog(context, SweetAlertDialogTypes.WARNING_TYPE);
                            pDialog
                                .setTitleText(options.successMessageText)
                                .setContentText(options.successMessageContentText)
                                .setConfirmText(options.successMessageButtonText)
                                .setConfirmClickListener(null)
                                .changeAlertType(SweetAlertDialogTypes.SUCCESS_TYPE);

                            pDialog.show();
                        }
                        else {
                            sDialog.dismissWithAnimation();
                        }
                        resolve(editText.getText());
                    }
                }))
            }
            else {
                pDialog.hideConfirmButton();
            }

            if (options.cancelButtonText) {
                pDialog.setCancelText(options.cancelButtonText);
                pDialog.setCancelClickListener(new cn.pedant.SweetAlert.SweetAlertDialog.OnSweetClickListener({
                    onClick: (sDialog) => {
                        sDialog.dismissWithAnimation();
                        resolve("CLOSED");
                    }
                }));
            }


            pDialog.show();

        });
    }

    public static showCheckbox(options: ShowCheckbox): Promise<any> {
        const context = application.android.startActivity;

        return new Promise((resolve, reject) => {

            cn.pedant.SweetAlert.SweetAlertDialog.DARK_STYLE = options.darkMode;

            let dialogType: any = SweetAlertDialogTypes.NORMAL_TYPE;
            if (options.customImage) {
                if (isNumber(options.customImage)) {
                    dialogType = options.customImage;
                }
                else {
                    dialogType = SweetAlertDialogTypes.CUSTOM_IMAGE_TYPE;
                }
            }

            let pDialog = new cn.pedant.SweetAlert.SweetAlertDialog(context, dialogType);
            pDialog.setTitleText(options.text);

            if (dialogType === SweetAlertDialogTypes.CUSTOM_IMAGE_TYPE) {
                var fileName = types.isString(options.customImage) ? options.customImage.toString().trim() : "";
                if (fileName.indexOf("~/") === 0) {
                    fileName = fs.path.join(fs.knownFolders.currentApp().path, fileName.replace("~/", ""));
                }

                const bitmap = android.graphics.BitmapFactory.decodeFile(fileName, null);

                pDialog.setCustomImage(new android.graphics.drawable.BitmapDrawable(application.android.context.getResources(), bitmap))
            }

            const checkBox: android.widget.CheckBox = new android.widget.CheckBox(context);
            checkBox.setChecked(options.checkBoxChecked);
            checkBox.setText(options.checkBoxText);

            pDialog.setCustomView(checkBox);

            if (options.confirmButtonText) {
                pDialog.setConfirmText(options.confirmButtonText);
                pDialog.setConfirmClickListener(new cn.pedant.SweetAlert.SweetAlertDialog.OnSweetClickListener({
                    onClick: (sDialog) => {
                        sDialog.dismissWithAnimation();
                        if (options.successMessageText) {
                            pDialog = new cn.pedant.SweetAlert.SweetAlertDialog(context, SweetAlertDialogTypes.WARNING_TYPE);
                            pDialog
                                .setTitleText(options.successMessageText)
                                .setContentText(options.successMessageContentText)
                                .setConfirmText(options.successMessageButtonText)
                                .setConfirmClickListener(null)
                                .changeAlertType(SweetAlertDialogTypes.SUCCESS_TYPE);

                            pDialog.show();
                        }
                        else {
                            sDialog.dismissWithAnimation();
                        }
                        resolve(checkBox.isChecked());
                    }
                }))
            }
            else {
                pDialog.hideConfirmButton();
            }

            if (options.cancelButtonText) {
                pDialog.setCancelText(options.cancelButtonText);
                pDialog.setCancelClickListener(new cn.pedant.SweetAlert.SweetAlertDialog.OnSweetClickListener({
                    onClick: (sDialog) => {
                        sDialog.dismissWithAnimation();
                        resolve("CLOSED");
                    }
                }));
            }


            pDialog.show();

        });
    }

}
