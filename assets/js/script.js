'use strict'

const initiativeEl = $('.initiative');

$('#start-initiative').hide();

const randomNumGen = max => {
    return Math.ceil(Math.random() * max);
};

const newInitiative = (name, bonus, roll) => {
    const combatantContainer = $('<div>');
    const nameEl = $(`<h6>${name}</h6>`);
    const turnEl = $(`<h6>${Number(bonus) + Number(roll)}</h6>`);
    $(combatantContainer).append(nameEl, turnEl);
    $('#initiative-field').append(combatantContainer);
};

const showStartInitiativeBtn = () => {
    $('#initiative-field').children().length
    ? $('#start-initiative').show()
    : $('#start-initiative').hide();
};

$('#initiative-form-submit').click(e => {
    e.preventDefault();
    let combatantName =
        !$('#initiative-form-name').val()
        ? `Combatant ${Number($('#initiative-field').children().length)}`
        : $('#initiative-form-name').val();
    const combatantBonus = ($('#initiative-form-bonus').val());
    const combatantRoll = (randomNumGen(20));
    newInitiative(combatantName, combatantBonus, combatantRoll);
    showStartInitiativeBtn();
    $('#initiative-form-name').val('');
    $('#initiative-form-bonus').val('0');
});