/**
 * @link https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/
 *
 * @param {number} minVW
 * @param {number} maxVW
 * @param {number} minPX
 * @param {number} maxPX
 * @return {string} CSS clamp function
 */
export function fluidSize(minVW: number, maxVW: number, minPX: number, maxPX: number): string {
    const maxPxDiff = maxPX - minPX
    const maxVwDiff = maxVW - minVW
    const minVwDiff = minVW - maxVW
    const minVwMaxPxMult = minVW * maxPX
    const maxVwMinPxMult = maxVW * minPX

    const minRem = (minPX / 16).toFixed(4)
    const maxRem = (maxPX / 16).toFixed(4)

    const v = (100 * maxPxDiff) / maxVwDiff
    const r = ((minVwMaxPxMult - maxVwMinPxMult) / minVwDiff) / 16

    const clampParts = [
        `${minRem}rem`,
        `${r.toFixed(4)}rem + ${v.toFixed(4)}vi`,
        `${maxRem}rem`
    ]
    return `clamp(${clampParts.join(', ')});`
}
