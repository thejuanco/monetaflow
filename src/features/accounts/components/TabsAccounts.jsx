import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"
import AllAccounts from "./AllAccounts"

export default function TabsAccounts() {
    const categories = [
        {
            name: "Todas",
            active: true,
            view: <AllAccounts/>
        },
        {
            name: "Bancarias",
            active: true,
            view: <AllAccounts filterType="bank" />
        },
        {
            name: "Cuenta Corriente",
            active: false,
            view: <AllAccounts filterType="checking" />
        },
        {
            name: "Crédito",
            active: true,
            view: <AllAccounts filterType="credit" />
        },
        {
            name: "Inversión",
            active: true,
            view: <AllAccounts filterType="investment" />
        },
        {
            name: "Efectivo",
            active: false,
            view: <AllAccounts filterType="cash" />
        }
    ]

    return (
        <div className="justify-center pt-2">
            <div>
                <TabGroup>
                    <TabList className="flex border border-gray-200">
                        {categories.filter((category => category.active == true)).map(({ name }) => (
                            <Tab
                                key={name}
                                className="border border-gray-200 px-3 py-1 text-gray-800 font-medium bg-gray-300 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:cursor-pointer data-selected:bg-gray-50 data-selected:data-hover:bg-gray-50"
                            >
                                {name}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels className="mt-3">
                    {categories
                        .filter((tab) => tab.active === true)
                        .map((tab, index) => (
                        <TabPanel key={index}>{tab.view}</TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    )
}
