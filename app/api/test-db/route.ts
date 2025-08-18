import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Test database connection
    await prisma.$connect()
    
    // Try to query users table (will fail if migration hasn't been run yet)
    const userCount = await prisma.user.count()
    
    return NextResponse.json({
      status: 'success',
      message: 'Database connection successful',
      userCount,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Database connection error:', error)
    
    return NextResponse.json({
      status: 'error',
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
