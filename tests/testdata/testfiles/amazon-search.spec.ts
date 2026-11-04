import { test, expect } from '@playwright/test';
import { HomePage } from './pages/homePage';
import { SearchResultsPage } from './pages/homepage/SearchResultsPage';

for (const data of testData.searchTests) {

    test(data.testName, async ({ page }) => {

        const homePage = new HomePage(page);
        const searchResultsPage = new SearchResultsPage(page);

        // Navigate
        await homePage.navigateTo(
            'https://www.amazon.in/'
        );

        // Verify Amazon page
        await homePage.verifyTitle(/Amazon/);

        // Verify search box
        expect(
            await homePage.isSearchBoxVisible()
        ).toBeTruthy();

        // Search product
        await homePage.searchProduct(
            data.product
        );

        // Verify search results page
        await searchResultsPage.waitForElement(
            page.locator(
                '[data-component-type="s-search-result"]'
            ).first()
        );

        // Verify URL
        await searchResultsPage.verifyUrl(
            /s\?k=/
        );

        // Verify result exists
        expect(
            await searchResultsPage.isResultDisplayed()
        ).toBeTruthy();

        // Get result count
        const resultCount =
            await searchResultsPage.getSearchResultCount();

        console.log(
            `${data.product} result count: ${resultCount}`
        );

        // Get product names
        const products =
            await searchResultsPage.getProductTitles();

        console.log(products);

        // Verify expected search term
        expect(
            products.length
        ).toBeGreaterThan(0);

    });
}