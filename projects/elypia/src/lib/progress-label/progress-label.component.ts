import {Component, Input} from '@angular/core';

/**
 * Badge that shows the percentage with a background-color
 * that represents how close the percentage is to 100.
 */
@Component({
  selector: 'ely-progress-label',
  templateUrl: './progress-label.component.html',
  styleUrls: ['./progress-label.component.css']
})
export class ProgressLabelComponent {

  /** The percentage that this component reflects. */
  @Input() public percentage: number;

  /** The color that the minimum (0) value should be displayed as. */
  @Input() public minColor: number[] = [255, 0, 0, 1];

  /** The color that the maximum (100) value should be displayed as. */
  @Input() public maxColor: number[] = [100, 255, 100, 1];

  /** An optional override if a color off the scale should be used for 100%. */
  @Input() public completeColor: number[] = null;

  /**
   * @returns The RGBA string for the background-color of the percentage.
   */
  public getRgba(): string {
    if (this.percentage === 100 && this.completeColor)
      return `rgba(${this.completeColor[0]}, ${this.completeColor[1]}, ${this.completeColor[2]}, ${this.completeColor[3]})`;
    else {
      const r = this.calculateColor(this.minColor[0], this.maxColor[0], this.percentage);
      const g = this.calculateColor(this.minColor[1], this.maxColor[1], this.percentage);
      const b = this.calculateColor(this.minColor[2], this.maxColor[2], this.percentage);
      const a = this.calculateColor(this.minColor[3], this.maxColor[3], this.percentage);

      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
  }

  /**
   * @param minColor The value of the color at 0%.
   * @param maxColor The value of the color at 100%/
   * @param percentage The current percentage to calculate for.
   * @returns A color between the min and max color relative to the percentage.
   */
  private calculateColor(minColor: number, maxColor: number, percentage: number): number {
    return minColor - ((minColor - maxColor) * (percentage / 100));
  }
}
