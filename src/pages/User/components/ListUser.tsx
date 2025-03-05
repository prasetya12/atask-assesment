import { useEffect, useState } from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../../components/ui/Accordion"
import { GitHubUser } from "../../../data/interfaces/user.interface"
import { useGetRepoByUsername } from "../../../domains/usecase/user.usecase"

interface ListUserProps {
    data?: GitHubUser[] | undefined,
    isLoading: boolean
}
export default function ListUser({ data, isLoading }: ListUserProps) {

    const [detailUsername, setDetailUsername] = useState('')
    const { data: repos, refetch, isLoading: isLoadingRepo } = useGetRepoByUsername(detailUsername);


    const handleDetailRepo = (username: string) => {
        if (username) {
            setDetailUsername(username)
        }
    }

    useEffect(() => {
        if (detailUsername && detailUsername.length > 1) {
            refetch()
        }
    }, [detailUsername, refetch])

    return (
        <>

            {isLoading ? (<><LoadingState /></>) : (<></>)}
            {data && !isLoading ? (<>   <Accordion type="single" collapsible className="w-full gap-2 flex flex-col">
                {data.map((user, index) => (
                    <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger onClick={() => handleDetailRepo(user.login)}>{user.login}</AccordionTrigger>
                        <AccordionContent className="p-4">
                            {isLoadingRepo ? (<>
                                <div className="flex justify-center">
                                    Loading...
                                </div>
                            </>) : (<></>)}
                            {!isLoadingRepo && repos?.length == 0 ? (<>
                                <div className="flex justify-center">
                                    No Repo

                                </div>
                            </>) : (<></>)}
                            {repos && repos.length > 0 ? (<>
                                <div className="flex flex-col gap-2 ">
                                    {repos.map((repo, index) => (
                                        <div className="bg-gray-200 p-4 rounded-md" key={index}>
                                            <div className="flex justify-between">
                                                <div>{repo.name}</div>
                                                <div>{repo.stargazers_count}</div>
                                            </div>
                                            <div>{repo.description}</div>
                                        </div>
                                    ))}
                                </div>
                            </>) : (<></>)}
                        </AccordionContent>
                    </AccordionItem>
                ))}



            </Accordion></>) : (<></>)}
        </>
    )
}

function LoadingState() {
    return (
        <div className="flex flex-col gap-2">
            <div role="status" className=" py-4 px-4 border border-gray-200 rounded-sm shadow-sm animate-pulse  ">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

            </div> <div role="status" className=" py-4 px-4 border border-gray-200 rounded-sm shadow-sm animate-pulse  ">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

            </div>
            <div role="status" className=" py-4 px-4 border border-gray-200 rounded-sm shadow-sm animate-pulse  ">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

            </div> <div role="status" className=" py-4 px-4 border border-gray-200 rounded-sm shadow-sm animate-pulse  ">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

            </div>
            <div role="status" className=" py-4 px-4 border border-gray-200 rounded-sm shadow-sm animate-pulse  ">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

            </div> <div role="status" className=" py-4 px-4 border border-gray-200 rounded-sm shadow-sm animate-pulse  ">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

            </div>
        </div>

    )
}