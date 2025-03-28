"use client"
import Button from "./Button"

export default function Pagination({
    currentPage = 1,
    maxPage = 1,
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
    return (<div className="flex gap-4">
        {onFirst && <Button onClick={onFirst}>&lt;&lt;&lt;</Button>}
        {onPrev && <Button onClick={onPrev}>&lt;</Button>}
        Sida {currentPage} av {maxPage}
        {onNext && <Button onClick={onNext}>&gt;</Button>}
        {onLast && <Button onClick={onLast}>&gt;&gt;&gt;</Button>}
    </div>)
}