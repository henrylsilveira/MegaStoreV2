module.exports = {
    date(timestamp) {
        const date = new Date(timestamp);

        const year = date.getUTCFullYear();
        const month = `0${date.getUTCMonth() + 1}`.slice(-2);
        const day =  `0${date.getUTCDate()}`.slice(-2);
        const hour = date.getHours();
        const minutes = date.getMinutes();

       return {
           day,
           month,
           year,
           hour,
           minutes,
           iso:`${year}-${month}-${day}`, //ISO
           birthDay: `${day}/${month}`,
           format: `${day}/${month}/${year}`
        }
    },
    formatPrice(price){
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price / 100);
    },
    formatCpfCnpj(value) {
        value = value.replace(/\D/g,"")
    
        if(value.length > 14) value = value.slice(0, -1)
    
        // CNPJ - 11.222.333/0001-11
        if(value.length > 11){
          value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3/$4-$5")
        } else {
          value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")
        }
        return value
    },
    formatCep(value) {
    value = value.replace(/\D/g,"")
    //84015-810
    if(value.length > 8) value = value.slice(0, -1)

    value = value.replace(/(\d{5})(\d{3})/,"$1-$2")
    return value
    }
}
