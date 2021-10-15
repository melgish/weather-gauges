export default `
<div class="card">
  <div class="card-body">
    <wg-pressure-mb-dial [current]="current" [previous]="previous"></wg-pressure-mb-dial>
  </div>
  <div class="card-footer p-1">
    <label>Pressure</label>
    <input class="w-100" type="range" min="880" max="1080" [(ngModel)]="current">
    <label>Previous <input type="checkbox" [(ngModel)]="previous"></label>
    <input class="w-100" type="range" min="880" max="1080" [(ngModel)]="previous">
  </div>
</div>
`;
