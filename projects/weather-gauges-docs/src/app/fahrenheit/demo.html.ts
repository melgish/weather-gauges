export default `
<div class="card">
  <div class="card-body">
    <wg-fahrenheit-dial [temperature]="fahrenheit"></wg-fahrenheit-dial>
  </div>
  <div class="card-footer p-1">
    <label>Temperature</label>
    <input class="w-100" type="range" min="-35" max="155" [(ngModel)]="fahrenheit">
  </div>
</div>
`;
