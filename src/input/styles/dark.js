import create from '../../styles/_utils/create-component-base'
import commonVariables from '../../styles/_common-style/input'
import { changeColor } from '../../_utils/color/index'
import suffixStyle from '../../_base/suffix/styles/dark'

export default create({
  name: 'Input',
  theme: 'dark',
  peer: [ suffixStyle ],
  getDerivedVariables ({ base, derived }) {
    const {
      secondaryTextOverlayColor,
      quaternaryTextOverlayColor,
      quinaryTextOverlayColor,
      quinaryOpacity,
      quaternaryOpacity,
      primaryColor,
      primaryHoverColor,
      inputBackgroundOverlayColor,
      disabledInputBackgroundOverlayColor,
      warningColor,
      warningHoverColor,
      errorColor,
      errorHoverColor,
      baseTextColor
    } = derived
    const {
      borderRadius
    } = base
    return {
      ...commonVariables,
      borderRadius,
      iconSize: '16px',
      default: {
        textColor: secondaryTextOverlayColor,
        disabledTextColor: quaternaryTextOverlayColor,
        caretColor: primaryColor,
        placeholderColor: quaternaryTextOverlayColor,
        disabledPlaceholderColor: quinaryTextOverlayColor,
        backgroundColor: inputBackgroundOverlayColor,
        disabledBackgroundColor: disabledInputBackgroundOverlayColor,
        focusBackgroundColor: changeColor(primaryColor, { alpha: 0.1 }),
        iconColor: baseTextColor,
        disabledIconColor: baseTextColor,
        iconOpacity: quaternaryOpacity,
        disabledIconOpacity: quinaryOpacity,
        borderMaskColor: 'transparent',
        hoverBorderMaskColor: primaryHoverColor,
        disabledBorderMaskColor: 'transparent !important',
        focusBorderMaskColor: primaryHoverColor,
        focusBorderMaskBoxShadow: `0 0 8px 0 ${changeColor(primaryColor, { alpha: 0.3 })}`,
        boxShadow: 'inset 0 0 0 1px transparent',
        focusBoxShadow: `0 0 0 2px ${changeColor(primaryColor, { alpha: 0.3 })}`,
        disabledBoxShadow: 'inset 0 0 0 1px transparent'
      },
      warning: {
        borderMaskColor: 'transparent',
        hoverBorderMaskColor: warningHoverColor,
        focusBackgroundColor: changeColor(warningColor, { alpha: 0.1 }),
        focusBorderMaskColor: warningHoverColor,
        focusBorderMaskBoxShadow: `0 0 8px 0 ${changeColor(warningColor, { alpha: 0.3 })}`,
        caretColor: warningColor
      },
      error: {
        borderMaskColor: 'transparent',
        hoverBorderMaskColor: errorHoverColor,
        focusBackgroundColor: changeColor(errorColor, { alpha: 0.1 }),
        focusBorderMaskColor: errorHoverColor,
        focusBorderMaskBoxShadow: `0 0 8px 0 ${changeColor(errorColor, { alpha: 0.3 })}`,
        caretColor: errorColor
      }
    }
  }
})
