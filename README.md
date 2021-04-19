SweetAlert library for NativeScript Android.

Based on:

- Android [F0RIS/sweet-alert-dialog](https://github.com/F0RIS/sweet-alert-dialog)

# Install

### NativeScript 6x

```bash
tns plugin add nativescript-sweet-alert
```

<img src="android_example.gif" width="400">





# Android Specifications

#### Usage Examples

NOTE: "options" may vary according to each method.

```js
import { SweetAlert } from 'nativescript-sweet-alert';
import { ShowSuccess , ShowError } from 'nativescript-sweet-alert/classes';


// showSuccess
const options: ShowSuccess = {
    text: "Hello",
    contentText: "Alert Content Text",
    confirmButtonText: "Ok",
    cancelButtonText: "Close"
}
SweetAlert.showSuccess(options).then(value => {
 // result: true, false, CLOSED    
});

// showError
const options: ShowError = {
    text: "Hello",
    contentText: "Alert Content Text",
    confirmButtonText: "Ok",
    cancelButtonText: "Close"
}
SweetAlert.showError(options).then(value => {
 // result: true, false, CLOSED    
});

```

#### NativeScript SweetAlert - Methods

- `showNormal(options: ShowNormal): Promise<any>`
- `showError(options: ShowError): Promise<any>`
- `showSuccess(options: ShowSuccess): Promise<any>`
- `showWarning(options: ShowWarning): Promise<any>`
- `showCustomImage(options: ShowCustomImage): Promise<any>`
- `showText(options: ShowText): Promise<any>`
- `showCheckbox(options: ShowCheckbox): Promise<any>`


## How can I change the colors?

App_Resources/Android/src/main/res/values/colors.xml add to [Color Properties](https://github.com/F0RIS/sweet-alert-dialog/blob/master/library/src/main/res/values/colors.xml)


## Why the TNS prefixed name?

`TNS` stands for **T**elerik **N**ative**S**cript

iOS uses classes prefixed with `NS` (stemming from the [NeXTSTEP](https://en.wikipedia.org/wiki/NeXTSTEP) days of old):
https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSString_Class/

To avoid confusion with iOS native classes, `TNS` is used instead.

## Demo

Need extra help getting these SweetAlert working in your application? Check out these tutorials that make use of the plugin:

[SweetAlert in a NativeScript Core Demo](https://github.com/NazimMertBilgi/nativescript-sweet-alert/blob/master/demo/app/home/home-page.ts)

[SweetAlert in a NativeScript Angular Demo](https://github.com/NazimMertBilgi/nativescript-sweet-alert/blob/master/demo-angular/src/app/home/home.component.ts)

## License

MIT
