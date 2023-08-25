export default function okAGE(field) {
    const birth = new Date(field.value);
    if (!validationBirth(birth)) {
        field.setCustomValidity("O usuário é maior de idade");
    }
}

function validationBirth (date) {
    const presentDate = new Date();
    const presentDate18 = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return presentDate >= presentDate18;
}
