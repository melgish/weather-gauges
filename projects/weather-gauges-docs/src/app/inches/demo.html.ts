export default `
<div class="card">
  <div class="card-body">
    <wg-pressure-in-dial [current]="current" [previous]="previous"></wg-pressure-in-dial>
  </div>
  <div class="card-footer p-1">
    <label>Pressure</label>
    <input class="w-100" type="range" min="25" max="33" step="0.125" [(ngModel)]="current">
    <label>Previous <input type="checkbox" [(ngModel)]="previous"></label>
    <input class="w-100" type="range" min="25" max="33" step="0.125" [(ngModel)]="previous">
  </div>
</div>
`;
