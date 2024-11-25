/**
 * Lightens a hex color by a specified percentage.
 * @param {string} hex - The hex color code in #xxx or #xxxxxx format.
 * @param {number} percentage - The percentage to lighten the color (0 to 100).
 * @returns {string} - The lightened hex color in #xxxxxx format.
 */
function lightenHexColor(hex: string, percentage: number): string {
  if (!/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex)) {
    throw new Error("Invalid hex color format");
  }

  if (hex.length === 4) {
    hex = `#${hex[1].repeat(2)}${hex[2].repeat(2)}${hex[3].repeat(2)}`;
  }

  const rgb: [number, number, number] = [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];

  const lightenedRgb = rgb.map((value) =>
    Math.min(255, Math.floor(value + (255 - value) * (percentage / 100)))
  ) as [number, number, number];

  return `#${lightenedRgb
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("")}`;
}

export { lightenHexColor };
