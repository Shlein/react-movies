import {useMemo} from "react";

const useSortedPosts = (posts, sortFunc, sortBy) => {
	useMemo(() => {
		return sortFunc
	}, [posts, sortBy])
}