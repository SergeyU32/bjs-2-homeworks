class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    const exists = this.alarmCollection.some(alarm => alarm.time === time);

    if (exists) {
      console.warn('Уже присутствует звонок на это же время');
      return;
    }

    this.alarmCollection.push({
      time,
      callback,
      canCall: true,
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      alarm => alarm.time !== time
    );
  }

  getCurrentFormattedTime() {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;

    return `${hours}:${minutes}`;
  }

  start() {
    if (this.intervalId) return;

    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();

      this.alarmCollection.forEach(alarm => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();

          // ВАЖНО: после первого срабатывания очищаем все звонки
          this.clearAlarms();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}