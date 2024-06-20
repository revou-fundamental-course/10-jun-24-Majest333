let isCelsiusToFahrenheit = true;

function Konversi() {
    const Input_Suhu = parseFloat(document.getElementById('Input_Suhu').value);
    const Saklar_Konversi = document.getElementById('Saklar-Konversi');
    let Output_Suhu;
    let Proses;

    if (Saklar_Konversi.checked) {
        isCelsiusToFahrenheit = false;
    } else {
        isCelsiusToFahrenheit = true;
    }

    if (isNaN(Input_Suhu)) {
        document.getElementById('Output_Suhu').value = '';
        document.getElementById('Output_Suhu').innerText = '';
        return;
    }

    if (isCelsiusToFahrenheit) {
        Output_Suhu = (Input_Suhu * 9/5) + 32;
        Proses = `${Input_Suhu}°C × 9/5 + 32 = ${Output_Suhu.toFixed(2)}°F`;
    } else {
        Output_Suhu = (Input_Suhu - 32) * 5/9;
        Proses = `(${Input_Suhu}°F - 32) × 5/9 = ${Output_Suhu.toFixed(2)}°C`;
    }

    document.getElementById('Output_Suhu').value = Output_Suhu.toFixed(2);
    document.getElementById('Proses').innerText = Proses;
}
