"use client"
import Button from "./Button"

export default function Pagination({
    currentPage,
    maxPage,
    onPrev,
    onNext,
}: {
    currentPage: number,
    maxPage: number,
    onPrev: () => void,
    onNext: () => void,
}) {
    return (<>
        <Button onClick={onPrev}>&lt;</Button>
        Sida {currentPage} av {maxPage}
        <Button onClick={onNext}>&gt;</Button>
    </>)
}