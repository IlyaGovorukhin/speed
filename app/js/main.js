window.onload = function() {
    var vies = {
        light: function (e) {
            var idname = 'swb' + e,
                drive = document.getElementById(idname);
                drive.style.background = "#f3f3f3";

        },
        blight: function (e) {
            var idname = 'swb' + e,
                drive = document.getElementById(idname);
            drive.style.background = "#000";

        },
        black: function(e){
                var oldid = +e - model.step,
                nold = 'swb' + oldid,
                olddrive = document.getElementById(nold);
                olddrive.style.background = "#000";
        }
    };
    var model = {
        step: 47,
        hight: 39,
        foo: 0,
        op: 0,
        op2: 0,
        a: 2000,
        b: 100,
        c: 200,
        bom: false,
        car: [1667,1713,1715,1761,1807,1809],
        rem: function () {
            var remdom = Math.floor(Math.random() * this.step);
            return remdom;
        },
        carprop: function () {
            var t = this;
            this.op2 = setInterval(function(){t.badcar()}, t.a);

        },
        badcar: function(){
            var bcar = [],
                t = this,
                rem = this.rem();
            if(rem == 0 || rem == 46){
                return false;
            } else {
                bcar.push(rem);
                bcar.push(rem + (this.step + 1));
                bcar.push(rem + (this.step - 1));
                bcar.push(rem + this.step + this.step);
                bcar.push(rem + this.step + this.step + (this.step + 1));
                bcar.push(rem + this.step + this.step + (this.step - 1));
                var op = setInterval(function () {
                    for (var i = 0; i < bcar.length; i++) {
                        bcar[i] = bcar[i] + t.step
                        vies.light(bcar[i]);
                        vies.black(bcar[i]);
                        for (var a = 0; a < t.car.length; a++) {
                            if (t.car[a] == bcar[i]) {
                                t.bom = true;
                                clearInterval(op);
                                clearInterval(t.op2);
                                clearInterval(t.op);
                                t.bome();
                            }
                        }

                    }
                    if (bcar[5] >= 1832) {
                        clearInterval(op);
                        for (var x = 0; x < bcar.length; x++) {
                            vies.blight(bcar[x]);
                        }
                    }
                }, t.c);
            }
        },
        prop: function () {
            var t = this;
            this.op = setInterval(function(){t.setIn()}, t.a);

        },
        setIn: function(){
            var fooo = this.rem(),
                t = this,
                pop = setInterval(function(){
                    for(var i = 0; i < t.car.length; i++){
                        if(t.car[i] == fooo){
                            t.bom = true;
                            t.stop(pop);
                            clearInterval(t.op);
                            clearInterval(t.op2);
                            t.bome();
                        }
                    }
                fooo = fooo + t.step;
                vies.light(fooo);
                vies.black(fooo);
                    if(fooo >= 1832){
                        clearInterval(pop);
                        vies.blight(fooo);
                    }



            }, t.b);
            },
        bome: function(){
            var t = this,
                loo = [];
              for (var i = 0; i < t.car.length; i++) {
                            loo.push(t.car[i] - (t.step - 1));
                            loo.push(t.car[i] - (t.step + 1));
                            loo.push(t.car[i] - t.step);
                            loo.push(t.car[i] + t.step);
                        }
                    for (var i = 0; i < loo.length; i++) {
                        t.light(loo[i]);
                    }
        },
        light: function(e){
            vies.light(e);
        },
        stop: function(e){
            clearInterval(e);
        },
        inter: function(){
         for(var i = 0; i < this.car.length; i++){
             vies.light(this.car[i]);
         }
            this.prop();
        },
        lol: function(){
            for(var i = 0; i < this.car.length; i++){
                vies.blight(this.car[i]);
                this.car[i] = this.car[i] + 1;
                vies.light(this.car[i]);

            }
        },
        lal: function(){
            for(var i = 0; i < this.car.length; i++){
                vies.blight(this.car[i]);
                this.car[i] = this.car[i] - 1;
                vies.light(this.car[i]);
            }
        }
    };
    var controller = {
          press: function(){
            var gInput = document.getElementById('go');
              setTimeout(function(){
                  gInput.focus();
              },1000)

              gInput.addEventListener('keypress',function trik(e){
                  if(model.bom) {
                      gInput.removeEventListener('keypress', trik);
                  } else {
                      if (e.keyCode == 54 && model.car[0] < 1690) {
                          model.lol();
                      }
                      if (e.keyCode == 52 && model.car[0] > 1646) {
                          model.lal();
                      }
                  }
                  if (e.keyCode == 50) {
                      model.b = model.b + 20;
                      model.c = model.c + 20;
                      model.a = model.a + 500;

                  }
                  if (e.keyCode == 56) {
                      model.b = model.b - 20;
                      model.c = model.c - 20;
                      model.a = model.a - 500;
                  }
              },false);

          },


    };

    model.inter();
    controller.press();
    model. carprop();

}