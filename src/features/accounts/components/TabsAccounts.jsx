import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"
import AllAccounts from "./AllAccounts"

export default function TabsAccounts() {
    const categories = [
        {
            name: "Todas",
            active: true
        },
        {
            name: "Bancarias",
            active: true
        },
        {
            name: "Cuenta Corriente",
            active: false
        },
        {
            name: "Crédito",
            active: true
        },
        {
            name: "Inversión",
            active: true
        },
        {
            name: "Efectivo",
            active: false
        }
    ]

    return (
        <div className="justify-center pt-2">
            <div>
                <TabGroup>
                    <TabList className="flex border border-gray-200">
                        {categories.map(({ name }) => (
                            <Tab
                                key={name}
                                className="border border-gray-200 px-3 py-1 text-gray-800 font-medium bg-gray-300 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:cursor-pointer data-selected:bg-gray-50 data-selected:data-hover:bg-gray-50"
                            >
                                {name}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels className="mt-3">
                        <TabPanel><AllAccounts/></TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    )
}
