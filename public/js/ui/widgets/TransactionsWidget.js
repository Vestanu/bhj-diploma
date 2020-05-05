/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */
class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (!element) {
      throw new Error('Виджет не найден');
    }
    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const createIncomeButton = document.querySelector('.create-income-button');
    const createExpenseButton = document.querySelector('.create-expense-button');

    createIncomeButton.addEventListener('click', (e) => {
      e.preventDefault();
      App.getModal('newIncome').open();
    });

    createExpenseButton.addEventListener('click', (e) => {
      e.preventDefault();
      App.getModal('newExpense').open();
    });
  }
}
