import useSWR from 'swr';

function Profile() {
    const { data, error, isLoading } = useSWR('/api/point', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>Loading...</div>

    return <div> {data.anyvalue} </div>
}

function useUser(id) {
    const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher)

    return {
        user: data,
        isLoading,
        isError: error
    }
}

function Avatar({ id }){
    const { user, isLoading, isError } = useUSer(id)

    if(isLoading) return <Spinner />
    if(isError) return <Error />
    return <img src={user.avatar} />
}