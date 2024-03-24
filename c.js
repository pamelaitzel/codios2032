function Estacionamiento(diaSemana, horaEntrada, horaSalida) {
    this.diaSemana = diaSemana;
    this.horaEntrada = horaEntrada;
    this.horaSalida = horaSalida;
  
    this.calcularCosto = function() {
      // Validar que las horas ingresadas tengan un formato correcto
      var horaEntradaValida = /^([01]\d|2[0-3]):([0-5]\d)$/.test(this.horaEntrada);
      var horaSalidaValida = /^([01]\d|2[0-3]):([0-5]\d)$/.test(this.horaSalida);
  
      if (!horaEntradaValida || !horaSalidaValida) {
        return 'Error: Por favor, ingrese horas válidas.';
      }
  
      var entrada = new Date('2024-01-01T' + this.horaEntrada + ':00');
      var salida = new Date('2024-01-01T' + this.horaSalida + ':00');
  
      // Calcular la diferencia en minutos
      var minutosEstacionados = Math.round((salida - entrada) / (1000 * 60));
  
      // Calcular el costo según el día de la semana
      var costo = 0;
      switch (this.diaSemana) {
        case 'lunes':
        case 'martes':
        case 'miercoles':
          costo = Math.ceil(minutosEstacionados / 60) * 10;
          break;
        case 'jueves':
        case 'viernes':
          costo = Math.ceil(minutosEstacionados / 60) * 12;
          break;
        case 'sabado':
        case 'domingo':
          costo = Math.ceil(minutosEstacionados / 60) * 15;
          break;
      }
  
      return 'El costo del estacionamiento es: $' + costo;
    };
  }
  
  // Función para manejar el botón de cálculo
  function calcularCosto() {
    var diaSemana = document.getElementById('diaSemana').value;
    var horaEntrada = document.getElementById('horaEntrada').value;
    var horaSalida = document.getElementById('horaSalida').value;
  
    var estacionamiento = new Estacionamiento(diaSemana, horaEntrada, horaSalida);
    var resultado = estacionamiento.calcularCosto();
  
    document.getElementById('resultado').innerHTML = resultado;
  }