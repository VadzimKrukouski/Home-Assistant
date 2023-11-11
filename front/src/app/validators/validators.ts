import {AbstractControl} from "@angular/forms";

export function decimalsValidator(numberToPoint: number, numberAfterPoint: number) {
  return (control: AbstractControl) => {
    const reg = /[^\d.]/;
    let totalLength = numberToPoint + 1 + numberAfterPoint;

    if (control.value) {
      let valueStr = control.value.toString();
      let valueAfterPoint;

      if (valueStr.match(reg)) {
        control.setValue(valueStr.slice(0, -1), { emitEvent: false });
      }

      if (valueStr.includes('.')) {
        totalLength = valueStr.indexOf('.') + 1 + numberAfterPoint;
        valueAfterPoint = valueStr.slice(valueStr.indexOf('.') + 1);

        if (valueAfterPoint.includes('.')) {
          valueStr =
            control.value.toString().slice(0, valueStr.indexOf('.') + 1) +
            valueAfterPoint.slice(0, valueAfterPoint.indexOf('.'));
          control.setValue(valueStr, { emitEvent: false });
        }
      }

      if ((valueStr.includes('.') && valueStr.indexOf('.') > numberToPoint) || valueStr.includes('..')) {
        valueStr = control.value.toString().slice(0, numberToPoint) + control.value.toString().slice(numberToPoint + 1);
        totalLength = numberToPoint + 1 + numberAfterPoint;
        control.setValue(valueStr, { emitEvent: false });
        valueAfterPoint = valueStr.slice(valueStr.indexOf('.') + 1);
      }

      if (valueAfterPoint && valueAfterPoint.length > numberAfterPoint) {
        valueStr = control.value.toString().slice(0, valueStr.indexOf('.') + 1 + numberAfterPoint);
        control.setValue(valueStr, { emitEvent: false });
        valueAfterPoint = valueStr.slice(valueStr.indexOf('.') + 1);
      }

      if (!valueStr.includes('.') && valueStr.length > numberToPoint) {
        totalLength = numberToPoint + 1;
        valueStr = control.value.toString().slice(0, numberToPoint);
        control.setValue(valueStr, { emitEvent: false });
      }

      if (valueStr.includes('.') && valueStr.length !== totalLength) {
        totalLength = numberToPoint + 1 + numberAfterPoint;
      }

      const posPoint = valueStr.indexOf('.') !== -1 ? valueStr.indexOf('.') : numberToPoint;

      if (valueStr.length === posPoint + 1) {
        if (valueStr.slice(-1) !== '.') control.setValue(valueStr.slice(0, posPoint), { emitEvent: false });
      }
      if (valueStr.length === totalLength + 1) {
        control.setValue(valueStr.slice(0, totalLength), { emitEvent: false });
      }

      if (!!valueStr) {
        return null;
      }

      return { decimalsInvalid: true };
    }
    return null;
  };
}

export function integerValidator(numberToPoint: number) {
  return (control: AbstractControl) => {
    const reg = /[^\d]/;

    if (control.value) {
      let valueStr: string = control.value.toString();

      if (valueStr.match(reg)) {
        if (valueStr) {
          valueStr = valueStr.slice(0, -1);
          control.setValue(valueStr, { emitEvent: false });
        }
      }

      if (valueStr.length === numberToPoint + 1) {
        control.setValue(valueStr.slice(0, numberToPoint), { emitEvent: false });
      }

      if (!!valueStr) {
        return null;
      }

      return { invalid: true };
    }
    return null;
  };
}
