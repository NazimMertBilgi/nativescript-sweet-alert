class GeneralParameters {

    constructor() {
        this.darkMode = false;
    };

    text: string;
    contentText: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    successMessageText?: string;
    successMessageContentText?: string;
    successMessageButtonText?: string;
    darkMode?: boolean;
}

export class ShowNormal implements GeneralParameters {
    text: string;
    contentText: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    successMessageText?: string;
    successMessageContentText?: string;
    successMessageButtonText?: string;
    darkMode?: boolean;
}

export class ShowError implements GeneralParameters {
    text: string;
    contentText: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    successMessageText?: string;
    successMessageContentText?: string;
    successMessageButtonText?: string;
    darkMode?: boolean;
}

export class ShowSuccess implements GeneralParameters {
    text: string;
    contentText: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    successMessageText?: string;
    successMessageContentText?: string;
    successMessageButtonText?: string;
    darkMode?: boolean;
}

export class ShowWarning implements GeneralParameters {
    text: string;
    contentText: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    successMessageText?: string;
    successMessageContentText?: string;
    successMessageButtonText?: string;
    darkMode?: boolean;
}

export class ShowCustomImage {

    constructor() {
        this.darkMode = false;
    };

    imagePath: string;
    text?: string;
    contentText?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    successMessageText?: string;
    successMessageContentText?: string;
    successMessageButtonText?: string;
    darkMode?: boolean;
}

export class ShowText {
    text: string;
    textViewText?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    customImage?: SweetAlertDialogTypes | string;
    successMessageText?: string;
    successMessageContentText?: string;
    successMessageButtonText?: string;
    darkMode?: boolean;
}

export class ShowCheckbox {
    text: string;
    checkBoxChecked?: boolean;
    checkBoxText?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    customImage?: SweetAlertDialogTypes | string;
    successMessageText?: string;
    successMessageContentText?: string;
    successMessageButtonText?: string;
    darkMode?: boolean;
}

export enum SweetAlertDialogTypes {
    NORMAL_TYPE = 0,
    ERROR_TYPE = 1,
    SUCCESS_TYPE = 2,
    WARNING_TYPE = 3,
    CUSTOM_IMAGE_TYPE = 4
}