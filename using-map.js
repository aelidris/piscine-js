const citiesOnly = (arr) => arr.map(obj => obj.city);

const upperCasingStates = (arr) => arr.map(state => 
  state.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
);

const fahrenheitToCelsius = (arr) => arr.map(temp => {
  const fahrenheit = parseInt(temp);
  const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
  return `${celsius}°C`;
});

const trimTemp = (arr) => arr.map(obj => ({
  ...obj,
  temperature: obj.temperature.replace(/\s/g, '')
}));

const tempForecasts = (arr) => arr.map(obj => {
  const fahrenheit = parseInt(obj.temperature);
  const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
  const cityState = `${obj.city}, ${upperCasingStates([obj.state])[0]}`;
  return `${celsius}°Celsius in ${cityState}`;
});