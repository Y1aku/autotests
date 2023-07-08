describe("Home work", () => {
  it("1 exercise", () => {
    // Перейти на страницу "https://example.cypress.io"
    cy.visit("https://example.cypress.io");
    // Нажать на Cypress API:
    // Выбрать селектор по атрибуту href для Cypress API и кликнуть по первому
    cy.get('a[href="/cypress-api"]').eq(0).click();
    // Вывести в лог кол-во команд со страницы
    cy.get("h4")
      .its("length") // Считаем кол-во h4
      // Определяем параметр length, как count
      .then((count) => {
        cy.log(`Количество заголовков: ${count}`); // Выводим в консоль Cypress кол-во заголовков
      });
    // Проверить что команда Cypress.Commands.add() есть и в заголовке и в тексте ниже:
    cy.get(".col-xs-12") // Выбрать блок для описания команды Cypress.Commands.add()
      .eq(0) // Выбрать первый элемент
      .contains("Cypress.Commands.add()") // Определить содержит ли элемент текст Cypress.Commands.add()
      // Обозначить параметр как $element1
      .then(($element1) => {
        // Выбрать элемент под заголовком h4 Cypress.Commands.add()
        cy.get('a[href="https://on.cypress.io/custom-commands"]')
          .eq(2) // Выбрать трерий схожий элемент
          .contains("Cypress.Commands.add()") // Определить содержит ли элемент текст Cypress.Commands.add()
          // Обозначить параметр как $element2
          .should(($element2) => {
            expect($element2.text()).to.equal($element1.text()); // Проверить равен ли $element1 $element2
          });
      });
    // Проверить цвет блока:
    cy.get("code.javascript") // Выбрать плашку для команды Cypress.Commands.add()
      .eq(0) // Первый схожий элемент
      .should("have.css", "background-color", "rgb(247, 247, 247)"); // Проверка, что у плашки есть определнный цвет
    // Сохранить текст из блока в фикстурах:
    cy.get("code.javascript") // Выбрать плашку для команды Cypress.Commands.add()
      .eq(0) // Первый схожий элемент
      .invoke("text") // Извлекаем содержимое
      // Сетим в text
      .then((text) => {
        cy.writeFile("cypress/fixtures/my-text.json", { content: text }); // Записываем файл с контентом из переменной text
      });
  });
});
