export default `
<div class="card">
  <div class="card-body">
    <wg-celsius-dial [temperature]="celsius"></wg-celsius-dial>
  </div>
  <div class="card-footer p-1">
    <label>Temperature</label>
    <input class="w-100" type="range" min="-35" max="75" [(ngModel)]="celsius">
  </div>
</div>
`;
