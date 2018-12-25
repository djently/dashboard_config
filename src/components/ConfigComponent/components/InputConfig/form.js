export const form = [
  {
    label: 'Default Input',
    fields: [
      {
        label: 'Bottom Border Color',
        path: 'default.borderColor',
        type: 'colorPicker',
      },
      {
        label: 'Bottom Border Width',
        path: 'default.borderBottomWidth',
        type: 'number',
      },
      {
        label: 'Bottom Border Style',
        path: 'default.borderStyle',
        type: 'borderStyle',
      },
    ],
  },
  {
    label: 'Input With Error',
    fields: [
      {
        label: 'Bottom Border Color',
        path: 'defaultError.borderColor',
        type: 'colorPicker',
      },
      {
        label: 'Bottom Border Width',
        path: 'defaultError.borderBottomWidth',
        type: 'number',
      },
      {
        label: 'Bottom Border Style',
        path: 'defaultError.borderStyle',
        type: 'borderStyle',
      },
    ],
  },
  {
    label: 'Search Input',
    fields: [
      {
        label: 'Background Color',
        path: 'search.backgroundColor',
        type: 'colorPicker',
      },
      {
        label: 'Bottom Border Color',
        path: 'search.borderColor',
        type: 'colorPicker',
      },
      {
        label: 'Bottom Border Width',
        path: 'search.borderBottomWidth',
        type: 'number',
      },
      {
        label: 'Bottom Border Style',
        path: 'search.borderStyle',
        type: 'borderStyle',
      },
    ],
  },
  {
    label: 'Verification code input',
    fields: [
      {
        label: 'Bottom Border Color',
        path: 'verificationCode.borderColor',
        type: 'colorPicker',
      },
      {
        label: 'Bottom Border Width',
        path: 'verificationCode.borderBottomWidth',
        type: 'number',
      },
      {
        label: 'Bottom Border Style',
        path: 'verificationCode.borderStyle',
        type: 'borderStyle',
      },
    ],
  },
  {
    label: 'Verification number input',
    fields: [
      { label: 'Font', path: 'verificationNumber.fontFamily', type: 'text' },
      {
        label: 'Font size',
        path: 'verificationNumber.fontSize',
        type: 'number',
      },
      {
        label: 'Font color',
        path: 'verificationNumber.color',
        type: 'colorPicker',
      },
    ],
  },
  {
    label: 'Verification code error',
    fields: [
      {
        label: 'Bottom Border Color',
        path: 'verificationCodeError.borderColor',
        type: 'colorPicker',
      },
      {
        label: 'Bottom Border Width',
        path: 'verificationCodeError.borderBottomWidth',
        type: 'number',
      },
      {
        label: 'Bottom Border Style',
        path: 'verificationCodeError.borderStyle',
        type: 'borderStyle',
      },
    ],
  },
  {
    label: 'Verification number error',
    fields: [
      { label: 'Font', path: 'verificationNumberError.fontFamily', type: 'text' },
      {
        label: 'Font size',
        path: 'verificationNumberError.fontSize',
        type: 'number',
      },
      {
        label: 'Font color',
        path: 'verificationNumberError.color',
        type: 'colorPicker',
      },
    ],
  },
  {
    label: 'Phone Login',
    fields: [
      {
        label: 'Background Color',
        path: 'phoneLogin.backgroundColor',
        type: 'colorPicker',
      },
    ],
  },
]
