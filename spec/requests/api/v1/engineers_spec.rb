require 'rails_helper'

RSpec.describe 'Api::V1::Engineers', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get '/api/v1/engineers/index'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /show' do
    it 'returns http success' do
      get '/api/v1/engineers/show'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /create' do
    it 'returns http success' do
      get '/api/v1/engineers/create'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /destroy' do
    it 'returns http success' do
      get '/api/v1/engineers/destroy'
      expect(response).to have_http_status(:success)
    end
  end
end
