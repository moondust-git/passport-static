export class CallBack {


  _ok: Function = function () {
  };

  ok(ok: Function): void {
    this._ok = ok;
  }
}
