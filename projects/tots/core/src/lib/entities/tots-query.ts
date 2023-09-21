export class TotsQuery {
    /**
     *
     */
    page = 1;
    /**
     *
     */
    per_page = 50;
    /**
     *
     */
    wheres: Array<any> = [];
    /**
     *
     */
    groups: Array<any> = [];
    /**
     *
     */
    sums: Array<any> = [];
    /**
     *
     */
    withs: Array<any> = [];
    /**
     *
     */
    orders: Array<any> = [];
    /**
     *
     */
    extraParams: any;

    /**
     *
     * @param key
     * @param value
     */
     addWhereEqual(key: string, value: any) {
        this.wheres.push({
            type: 'equal',
            key: key,
            value: value
        })
    }
    /**
     *
     * @param key
     * @param from
     * @param to
     */
     addWhereBetween(key: string, from: any, to: any) {
        this.wheres.push({
            type: 'between',
            key: key,
            from: from,
            to: to,
        })
    }
    /**
     *
     * @param key
     * @param from
     * @param to
     */
     addWhereBetweenDate(key: string, from: any, to: any) {
        this.wheres.push({
            type: 'between_date',
            key: key,
            from: from,
            to: to,
        })
    }
    /**
     *
     * @param key
     * @param value
     */
     addWhereDate(key: string, value: string) {
        this.wheres.push({
            type: 'date',
            key: key,
            value: value
        })
    }
    /**
     *
     * @param key
     * @param value
     */
    addWhereGreaterThan(key: string, value: any) {
        this.wheres.push({
            type: 'greater-than',
            key: key,
            value: value
        })
    }
    /**
     *
     * @param key
     * @param values
     */
    addWhereIn(key: string, values: any) {
        this.wheres.push({
            type: 'in',
            key: key,
            value: values
        })
    }
    /**
     *
     * @param key
     * @param value
     */
    addWhereLessThan(key: string, value: any) {
        this.wheres.push({
            type: 'less-than',
            key: key,
            value: value
        })
    }
    /**
     *
     * @param key
     * @param value
     */
     addWhereYear(key: string, value: any) {
        this.wheres.push({
            type: 'year',
            key: key,
            value: value
        })
    }
    /**
     *
     * @param key
     * @param value
     */
     addWhereMonth(key: string, value: any) {
        this.wheres.push({
            type: 'month',
            key: key,
            value: value
        })
    }
    /**
     *
     * @param key
     * @param value 2020-01-01
     */
     addWhereWeek(key: string, value: any) {
        this.wheres.push({
            type: 'week',
            key: key,
            value: value
        })
    }
    /**
     *
     * @param key
     * @param value
     */
    addWhereLikes(keys: Array<string>, value: string) {
        this.wheres.push({
            type: 'likes',
            keys: keys,
            value: value
        })
    }
    /**
     *
     * @param key
     */
    addWhereNull(key: string) {
        this.wheres.push({
            type: 'null',
            key: key
        })
    }
    /**
     *
     */
    removeAllWhereLikes() {
        this.removeWheresByType('likes');
    }
    /**
     *
     */
    removeAllWhereIn() {
        this.removeWheresByType('in');
    }
    /**
     *
     */
    removeAllWhereBetween() {
        this.removeWheresByType('between');
    }
    /**
     *
     */
    removeAllWhereBetweenDate() {
        this.removeWheresByType('between_date');
    }
    /**
     *
     */
    removeAllWhereEqual() {
        this.removeWheresByType('equal');
    }
    /**
     *
     * @param type
     */
    removeWheresByType(type: string) {
        this.wheres = this.wheres.filter(item => item.type != type);
    }
    /**
     *
     */
    resetWheres() {
        this.wheres = [];
    }
    /**
     *
     */
    cleanWheres() {
        this.resetWheres();
    }
    /**
     *
     */
    resetOrders() {
        this.orders = [];
    }
    /**
     *
     */
    cleanOrders() {
        this.resetOrders();
    }
    /**
     *
     */
    convertWheresToBase64() {
        let string = JSON.stringify({ wheres: this.wheres, orders: this.orders });
        return btoa(string);
    }
    /**
     *
     * @param key
     */
    addGroupBy(key: string) {
        this.groups.push(key);
    }
    /**
     *
     * @param key
     */
    addSum(key: string) {
        this.sums.push(key);
    }
    /**
     *
     * @param key
     */
    addWith(key: string) {
        this.withs.push(key);
    }
    /**
     *
     * @param key
     */
    addOrderAsc(key: string) {
        this.orders.push({
            type: 'asc',
            field: key
        })
    }
    /**
     *
     * @param key
     */
    addOrderDesc(key: string) {
        this.orders.push({
            type: 'desc',
            field: key
        })
    }
    /**
     *
     * @param key
     * @param value
     */
    addExtraParam(key: string, value: any) {
      if(this.extraParams == undefined){
        this.extraParams = {};
      }
      this.extraParams[key] = value;
    }
    /**
     *
     * @param key
     * @returns
     */
    removeExtraParam(key: string){
      if(this.extraParams == undefined){
        return;
      }
      delete this.extraParams[key];
    }
    /**
     *
     */
    resetExtraParams(){
      this.extraParams = undefined;
    }

    toStringExtraParams(){
      let result = '';

      if(this.extraParams == undefined){
        return result;
      }

      // Itera a través de las propiedades del objeto
      for (let key in this.extraParams) {
        if (this.extraParams.hasOwnProperty(key)) {
          let val = this.extraParams[key];
          // Agrega la clave y el valor a la cadena
          result += `${key}=${val}&`;
        }
      }
      return result;
    }
    /**
     * Devuelve queryParams para el request HTTP
     * @returns
     */
    toString() {
        return 'page=' + this.page + '&per_page=' + this.per_page + '&withs=' + this.withs.join(',') + '&groups=' + this.groups.join(',') + '&sums=' + this.sums.join(',') + '&filters=' + this.convertWheresToBase64() + '&perPage=' + this.per_page + '&' + this.toStringExtraParams();
    }
    /**
     * Devuelve queryParams para el request HTTP para poder copiarse
     * @returns
     */
    toStringTest() {
        return 'page=' + this.page + '&per_page=' + this.per_page + '&withs=' + this.withs.join(',') + '&groups=' + this.groups.join(',') + '&sums=' + this.sums.join(',') + '&filtersString=' + JSON.stringify({ wheres: this.wheres, orders: this.orders }) + '&perPage=' + this.per_page + '&' + this.toStringExtraParams();
    }
}
