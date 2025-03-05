import { useUsers } from "../../domains/usecase/user.usecase";
import Layout from "../../components/layouts/layout";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormField, FormItem, FormMessage, FormControl } from "../../components/ui/Form";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import ListUser from "./components/ListUser";
import { useState, useEffect } from "react";
const formSearchSchema = z.object({
    search: z.string().min(2, {
        message: "Search must be at least 2 characters.",
    }),
})

export default function User() {
    const [username, setUsername] = useState<string>("");

    const { data: users, refetch, isLoading } = useUsers(username);

    const form = useForm<z.infer<typeof formSearchSchema>>({
        resolver: zodResolver(formSearchSchema),
        defaultValues: {
            search: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSearchSchema>) {
        setUsername(values.search)
    }

    useEffect(() => {
        if (username) {
            refetch()
        }
    }, [username, refetch])

    return (

        <>
            <Layout>
                <Form {...form}>
                    <div className="pt-24">
                        <div className="mb-4 font-semibold text-xl text-center">Github User</div>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="search"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Enter Username" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-center">
                                <Button type="submit">Submit</Button>
                            </div>

                            <div className="mt-6">
                                <ListUser data={users ?? []} isLoading={isLoading} />
                            </div>
                        </form>
                    </div>
                </Form>

            </Layout>


        </>
    )
}