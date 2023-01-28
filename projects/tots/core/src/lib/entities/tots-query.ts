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
     * @param key 
     * @param value
     */
     addWhereEqual(key: string, value: string) {
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
    addWhereGreaterThan(key: string, value: string) {
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
    addWhereLessThan(key: string, value: string) {
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
     addWhereYear(key: string, value: string) {
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
     addWhereMonth(key: string, value: string) {
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
     addWhereWeek(key: string, value: string) {
        this.wheres.push({
            type: 'week',
            key: key,
            value: value
        })
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
    convertWheresToBase64() {
        let string = JSON.stringify({ wheres: this.wheres });
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
     * Devuelve queryParams para el request HTTP
     * @returns 
     */
    toString() {
        return 'page=' + this.page + '&per_page=' + this.per_page + '&groups=' + this.groups.join(',') + '&sums=' + this.sums.join(',') + '&filters=' + this.convertWheresToBase64();
    }
}