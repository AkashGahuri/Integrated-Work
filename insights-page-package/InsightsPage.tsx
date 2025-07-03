'use client'

import { motion } from 'framer-motion'
import { 
  Globe, 
  ChevronRight, 
  ChevronDown, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  Users, 
  DollarSign, 
  MapPin, 
  ExternalLink,
  Filter,
  Search,
  ArrowLeft,
  Link as LinkIcon,
  Target,
  Lightbulb
} from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import AtlasView from './components/AtlasView'

// Type definitions
interface Issue {
  id: number
  title: string
  severity: string
  trend: string
  summary: string
  details: string
  relatedOpportunities: Array<{
    title: string
    type: string
    amount: string
    match: number
  }>
  implications: string[]
  timeline: string
  stakeholders: string[]
}

interface Sector {
  issues: Issue[]
}

interface Country {
  sectors: Record<string, Sector>
}

interface Region {
  impact: string
  trend: string
  keyIssues: string[]
  countries?: Record<string, Country>
}

interface GlobalData {
  regions: Record<string, Region>
}

// Mock data structure
const globalData: GlobalData = {
  regions: {
    'Africa': {
      impact: 'high',
      trend: 'up',
      keyIssues: ['Economic Growth', 'Climate Adaptation', 'Digital Transformation'],
      countries: {
        'Kenya': {
          sectors: {
            'Healthcare': {
              issues: [
                {
                  id: 1,
                  title: 'Digital Health Infrastructure Expansion',
                  severity: 'high',
                  trend: 'up',
                  summary: 'Kenya accelerating digital health adoption with $200M government investment',
                  details: 'The Kenyan government announced a comprehensive digital health strategy focusing on rural connectivity, telemedicine platforms, and health data integration. This creates significant opportunities for health tech startups and consulting firms.',
                  relatedOpportunities: [
                    { title: 'Digital Health Innovation Grant', type: 'Grant', amount: '$50K-200K', match: 94 },
                    { title: 'Kenya Health Ministry RFP', type: 'RFP', amount: '$80K-150K', match: 87 }
                  ],
                  implications: [
                    'Increased demand for health tech solutions',
                    'Government contracts opening up',
                    'Need for local implementation partners'
                  ],
                  timeline: '2025-2027 implementation phase',
                  stakeholders: ['Ministry of Health', 'County Governments', 'WHO Kenya']
                },
                {
                  id: 2,
                  title: 'Maternal Health Crisis in Rural Areas',
                  severity: 'critical',
                  trend: 'down',
                  summary: 'Rising maternal mortality rates highlighting urgent need for innovative solutions',
                  details: 'Recent data shows 30% increase in maternal mortality in rural Kenya, creating urgent demand for mobile health solutions, training programs, and policy interventions.',
                  relatedOpportunities: [
                    { title: 'USAID Maternal Health Program', type: 'Grant', amount: '$100K-500K', match: 91 },
                    { title: 'UN Women Innovation Challenge', type: 'Grant', amount: '$25K-100K', match: 89 }
                  ],
                  implications: [
                    'Emergency funding being allocated',
                    'International organizations mobilizing',
                    'Local NGOs seeking partnerships'
                  ],
                  timeline: 'Immediate intervention needed',
                  stakeholders: ['USAID', 'UN Women', 'Local Health NGOs']
                }
              ]
            },
            'Technology': {
              issues: [
                {
                  id: 3,
                  title: 'AI Regulation Framework Development',
                  severity: 'medium',
                  trend: 'up',
                  summary: 'Kenya developing comprehensive AI governance framework',
                  details: 'Government establishing AI ethics board and regulatory framework, creating opportunities for policy consultants and compliance specialists.',
                  relatedOpportunities: [
                    { title: 'AI Policy Consultant Role', type: 'Contract', amount: '$150/hour', match: 85 },
                    { title: 'Tech Governance Workshop', type: 'Event', amount: '$5K speaking fee', match: 82 }
                  ],
                  implications: [
                    'New compliance requirements for tech companies',
                    'Consulting opportunities in AI ethics',
                    'Speaking and training opportunities'
                  ],
                  timeline: 'Draft regulations by Q2 2026',
                  stakeholders: ['Ministry of ICT', 'Kenya ICT Board', 'Tech Industry Players']
                }
              ]
            },
            'Education': {
              issues: [
                {
                  id: 4,
                  title: 'Digital Learning Platform Rollout',
                  severity: 'high',
                  trend: 'up',
                  summary: 'National digital education initiative requires large-scale implementation',
                  details: 'Government rolling out digital learning platforms to 15,000 primary schools, requiring content development, teacher training, and technical support.',
                  relatedOpportunities: [
                    { title: 'Education Technology RFP', type: 'RFP', amount: '$80K-150K', match: 79 },
                    { title: 'Teacher Training Program', type: 'Contract', amount: '$200/day', match: 76 }
                  ],
                  implications: [
                    'Massive content development needs',
                    'Teacher training opportunities',
                    'Long-term maintenance contracts'
                  ],
                  timeline: '3-year rollout starting 2026',
                  stakeholders: ['Ministry of Education', 'County Education Offices', 'Teacher Unions']
                }
              ]
            }
          }
        }
      }
    },
    'Europe': {
      impact: 'medium',
      trend: 'stable',
      keyIssues: ['Green Transition', 'Digital Sovereignty', 'Migration Policy']
    },
    'North America': {
      impact: 'high',
      trend: 'up',
      keyIssues: ['AI Regulation', 'Infrastructure Investment', 'Climate Action']
    }
  }
}

export default function InsightsPage() {
  const [currentLevel, setCurrentLevel] = useState('world')
  const [selectedPath, setSelectedPath] = useState<string[]>([])
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null)
  const [timeFilter, setTimeFilter] = useState('all')
  const [severityFilter, setSeverityFilter] = useState('all')
  const [view, setView] = useState<'insights' | 'atlas'>('insights')

  const breadcrumbs = ['World', ...selectedPath]

  const navigateToLevel = (level: string, item?: string) => {
    if (item) {
      setSelectedPath([...selectedPath, item])
    }
    setCurrentLevel(level)
  }

  const goBack = () => {
    if (selectedPath.length > 0) {
      const newPath = selectedPath.slice(0, -1)
      setSelectedPath(newPath)
      
      if (newPath.length === 0) setCurrentLevel('world')
      else if (newPath.length === 1) setCurrentLevel('region')
      else if (newPath.length === 2) setCurrentLevel('country')
      else if (newPath.length === 3) setCurrentLevel('sector')
    }
  }

  const renderWorldView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(globalData.regions).map(([region, data]) => (
        <motion.div
          key={region}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl border border-stone-200 cursor-pointer hover:border-stone-300 transition-all"
          onClick={() => navigateToLevel('region', region)}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-stone-900">{region}</h3>
            <div className="flex items-center space-x-2">
              {data.trend === 'up' ? 
                <TrendingUp className="w-4 h-4 text-green-500" /> : 
                <TrendingDown className="w-4 h-4 text-red-500" />
              }
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </div>
          </div>
          <div className="space-y-2">
            <div className={`text-xs px-2 py-1 rounded-full inline-block ${
              data.impact === 'high' ? 'bg-red-100 text-red-700' :
              data.impact === 'medium' ? 'bg-yellow-100 text-yellow-700' :
              'bg-green-100 text-green-700'
            }`}>
              {data.impact} impact
            </div>
            <div className="text-sm text-stone-600">
              Key Issues: {data.keyIssues.join(', ')}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )

  const renderCountryView = () => {
    const region = selectedPath[0]
    const regionData = globalData.regions[region]
    const countries = regionData?.countries || {}
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(countries).map(([country, data]) => (
          <motion.div
            key={country}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl border border-stone-200 cursor-pointer hover:border-stone-300 transition-all"
            onClick={() => navigateToLevel('country', country)}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-stone-900">{country}</h3>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </div>
            <div className="text-sm text-stone-600">
              {Object.keys(data.sectors).length} active sectors
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  const renderSectorView = () => {
    const [region, country] = selectedPath
    const regionData = globalData.regions[region]
    const countryData = regionData?.countries?.[country]
    const sectors = countryData?.sectors || {}
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(sectors).map(([sector, data]) => (
          <motion.div
            key={sector}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl border border-stone-200 cursor-pointer hover:border-stone-300 transition-all"
            onClick={() => navigateToLevel('sector', sector)}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-stone-900">{sector}</h3>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </div>
            <div className="text-sm text-stone-600">
              {data.issues.length} active issues
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  const renderIssuesView = () => {
    const [region, country, sector] = selectedPath
    const regionData = globalData.regions[region]
    const countryData = regionData?.countries?.[country]
    const sectorData = countryData?.sectors?.[sector]
    const issues = sectorData?.issues || []
    
    return (
      <div className="space-y-6">
        {issues.map((issue) => (
          <motion.div
            key={issue.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl border border-stone-200 cursor-pointer hover:border-stone-300 transition-all"
            onClick={() => setSelectedIssue(issue)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    issue.severity === 'critical' ? 'bg-red-100 text-red-700' :
                    issue.severity === 'high' ? 'bg-orange-100 text-orange-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {issue.severity}
                  </span>
                  {issue.trend === 'up' ? 
                    <TrendingUp className="w-4 h-4 text-green-500" /> : 
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  }
                </div>
                <h3 className="text-lg font-medium text-stone-900 mb-2">{issue.title}</h3>
                <p className="text-sm text-stone-600 mb-3">{issue.summary}</p>
                <div className="flex items-center space-x-4 text-xs text-stone-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{issue.timeline}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <LinkIcon className="w-3 h-3" />
                    <span>{issue.relatedOpportunities.length} opportunities</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-stone-400" />
            </div>
            
            {/* Related Opportunities Preview */}
            <div className="mt-4 pt-4 border-t border-stone-100">
              <div className="flex items-center space-x-2 mb-3">
                <Target className="w-4 h-4 text-stone-600" />
                <span className="text-sm font-medium text-stone-900">Related Opportunities</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {issue.relatedOpportunities.slice(0, 2).map((opp, idx) => (
                  <div key={idx} className="bg-stone-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500 bg-white px-2 py-1 rounded-full">
                        {opp.type}
                      </span>
                      <span className="text-xs text-stone-600">{opp.match}% match</span>
                    </div>
                    <h4 className="text-sm font-medium text-stone-900 mb-1">{opp.title}</h4>
                    <p className="text-xs text-stone-600">{opp.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  const renderIssueDetail = () => {
    if (!selectedIssue) return null

    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        {/* Issue Header */}
        <div className="bg-white p-8 rounded-2xl border border-stone-200">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className={`text-sm px-3 py-1 rounded-full ${
                  selectedIssue.severity === 'critical' ? 'bg-red-100 text-red-700' :
                  selectedIssue.severity === 'high' ? 'bg-orange-100 text-orange-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {selectedIssue.severity} priority
                </span>
                {selectedIssue.trend === 'up' ? 
                  <TrendingUp className="w-5 h-5 text-green-500" /> : 
                  <TrendingDown className="w-5 h-5 text-red-500" />
                }
              </div>
              <h1 className="text-2xl font-light text-stone-900 mb-3">{selectedIssue.title}</h1>
              <p className="text-stone-600 text-lg leading-relaxed">{selectedIssue.details}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-medium text-stone-900 mb-3">Timeline</h3>
              <p className="text-sm text-stone-600">{selectedIssue.timeline}</p>
            </div>
            <div>
              <h3 className="font-medium text-stone-900 mb-3">Key Stakeholders</h3>
              <div className="flex flex-wrap gap-2">
                {selectedIssue.stakeholders.map((stakeholder, idx) => (
                  <span key={idx} className="text-xs bg-stone-100 text-stone-700 px-2 py-1 rounded-full">
                    {stakeholder}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Market Implications */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200">
          <div className="flex items-center space-x-2 mb-4">
            <Lightbulb className="w-5 h-5 text-stone-600" />
            <h3 className="font-medium text-stone-900">Market Implications</h3>
          </div>
          <ul className="space-y-2">
            {selectedIssue.implications.map((implication, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-stone-700">{implication}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Related Opportunities */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-stone-600" />
              <h3 className="font-medium text-stone-900">Related Opportunities</h3>
            </div>
            <Link href="/dashboard" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
              View all →
            </Link>
          </div>
          <div className="space-y-4">
            {selectedIssue.relatedOpportunities.map((opp, idx) => (
              <div key={idx} className="border border-stone-200 p-4 rounded-xl hover:border-stone-300 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-medium text-stone-500 bg-stone-100 px-2 py-1 rounded-full">
                      {opp.type}
                    </span>
                    <span className="text-xs text-stone-600">{opp.match}% match</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400" />
                </div>
                <h4 className="font-medium text-stone-900 mb-1">{opp.title}</h4>
                <p className="text-sm text-stone-600">{opp.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-stone-50">
      {/* View Selector Tabs */}
      <div className="flex space-x-2 p-4 bg-white border-b border-stone-200">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${view === 'insights' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}
          onClick={() => setView('insights')}
        >
          Insights
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${view === 'atlas' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}
          onClick={() => setView('atlas')}
        >
          Atlas
        </button>
      </div>
      {/* Main Content */}
      {view === 'insights' ? (
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-9">
              {/* Breadcrumbs & Navigation */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  {selectedPath.length > 0 && (
                    <button onClick={goBack} className="p-2 hover:bg-white rounded-full transition-colors">
                      <ArrowLeft className="w-4 h-4 text-stone-600" />
                    </button>
                  )}
                  <div className="flex items-center space-x-2 text-sm text-stone-600">
                    {breadcrumbs.map((crumb, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className={index === breadcrumbs.length - 1 ? 'text-stone-900 font-medium' : ''}>
                          {crumb}
                        </span>
                        {index < breadcrumbs.length - 1 && <ChevronRight className="w-3 h-3" />}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <select 
                    value={timeFilter} 
                    onChange={(e) => setTimeFilter(e.target.value)}
                    className="text-xs bg-stone-50 border border-stone-200 rounded-full px-3 py-1"
                  >
                    <option value="all">All Time</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                  </select>
                  <select 
                    value={severityFilter} 
                    onChange={(e) => setSeverityFilter(e.target.value)}
                    className="text-xs bg-stone-50 border border-stone-200 rounded-full px-3 py-1"
                  >
                    <option value="all">All Severity</option>
                    <option value="critical">Critical</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                  </select>
                </div>
              </div>

              {/* Content Area */}
              {selectedIssue ? renderIssueDetail() :
               currentLevel === 'world' ? renderWorldView() :
               currentLevel === 'region' ? renderCountryView() :
               currentLevel === 'country' ? renderSectorView() :
               renderIssuesView()}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {/* User Context */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200">
                  <h3 className="font-medium text-stone-900 mb-4">Your Focus Areas</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-700">Healthcare</span>
                      <span className="text-xs text-stone-500">Primary</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-700">Technology</span>
                      <span className="text-xs text-stone-500">Secondary</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-700">East Africa</span>
                      <span className="text-xs text-stone-500">Region</span>
                    </div>
                  </div>
                </div>

                {/* Trending Issues */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200">
                  <h3 className="font-medium text-stone-900 mb-4">Trending in Your Field</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-stone-700">Digital Health Funding</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-stone-700">AI in Healthcare</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingDown className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-stone-700">Rural Access Challenges</span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200">
                  <h3 className="font-medium text-stone-900 mb-4">Global Overview</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-stone-600">Active Issues</span>
                      <span className="text-lg font-light text-stone-900">1,247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-stone-600">Related Opportunities</span>
                      <span className="text-lg font-light text-stone-900">156</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-stone-600">Your Matches</span>
                      <span className="text-lg font-light text-stone-900">23</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <AtlasView />
      )}
    </div>
  )
} 