import{Page} from '@playwright/test';
export class reusablemethod{
    constructor(protected page:Page){}
    async openurl(url:string)
    {
        await this.page.goto(url);
    }import{Page} from '@playwright/test';
export class reusablemethod{
    constructor(protected page:Page){}
    async openurl(url:string)
    {
        await this.page.goto(url);
    }

}