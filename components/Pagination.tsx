"use client"
import Button from "./Button"

export default function Pagination({
    currentPage,
    maxPage,
    onFirst,
    onPrev,
    onNext,
    onLast,
}: {
    currentPage: number,
    maxPage: number,
    onFirst?: () => void,
    onPrev?: () => void,
    onNext?: () => void,
    onLast?: () => void,
}) {
    return (<>
        {onFirst && <Button onClick={onFirst}>&lt;&lt;&lt;</Button>}
        {onPrev && <Button onClick={onPrev}>&lt;</Button>}
        Sida {currentPage} av {maxPage}
        {onNext && <Button onClick={onNext}>&gt;</Button>}
        {onLast && <Button onClick={onLast}>&gt;&gt;&gt;</Button>}
    </>)
}