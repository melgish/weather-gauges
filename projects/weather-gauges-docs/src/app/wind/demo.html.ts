export default `
<div class="card">
  <div class="card-body">
    <wg-wind-dial [direction]="direction" [speed]="speed" [units]="units"></wg-wind-dial>
  </div>
  <div class="card-footer p-1">
    <label>Direction</label>
    <input class="w-100" type="range" min="0" max="360" [(ngModel)]="direction">
    <label>Speed</label>
    <input class="w-100" type="range" min="0" max="140" [(ngModel)]="speed">
  </div>
</div>
`;
