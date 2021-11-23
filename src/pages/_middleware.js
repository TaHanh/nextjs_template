
import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware() {
    return undefined
    NextRequest.nex
    const shouldHandleLocale =
        !PUBLIC_FILE.test(NextRequest.nextUrl.pathname) &&
        !NextRequest.nextUrl.pathname.includes('/api/') &&
        NextRequest.nextUrl.locale === 'default'

    return shouldHandleLocale
        ? NextResponse.redirect(`/ennn${NextRequest.nextUrl.href}`)
        : undefined
}