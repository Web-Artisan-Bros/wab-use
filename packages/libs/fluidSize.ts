/**
 * @link https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/
 *
 * @param {number} minVW
 * @param {number} maxVW
 * @param {number} minPX
 * @param {number} maxPX
 * @return {string} CSS clamp function
 */
export function fluidSize (minVW: number, maxVW: number, minPX: number, maxPX: number, pxToRem = true, respUnit = 'rem'): string {
    const maxPxDiff = maxPX - minPX
    const maxVwDiff = maxVW - minVW
    const minVwDiff = minVW - maxVW
    const minVwMaxPxMult = minVW * maxPX
    const maxVwMinPxMult = maxVW * minPX
    
    const minRem = pxToRem ? +(minPX / 16).toFixed(4) : minPX
    const maxRem = pxToRem ? +(maxPX / 16).toFixed(4) : maxPX
    
    if (minRem == maxRem) {
        return `${minRem}${respUnit}`
    }
    
    const v = (100 * maxPxDiff) / maxVwDiff
    const r = ((minVwMaxPxMult - maxVwMinPxMult) / minVwDiff) / 16
    
    const clampParts = [
        `${minRem}${respUnit}`,
        `${r.toFixed(4)}${respUnit} + ${v.toFixed(4)}vi`,
        `${maxRem}${respUnit}`
    ]
    return `clamp(${clampParts.join(', ')});`
}
