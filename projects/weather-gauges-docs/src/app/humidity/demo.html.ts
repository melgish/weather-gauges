export default `
<div class="card">
  <div class="card-body">
    <wg-humidity-dial [humidity]="humidity"></wg-humidity-dial>
  </div>
  <div class="card-footer p-1">
    <label>Humidity</label>
    <input class="w-100" type="range" min="-5" max="105" [(ngModel)]="humidity">
  </div>
</div>
`;
