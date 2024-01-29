require 'rails_helper'

RSpec.describe 'Api::V1::Consultations', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get '/api/v1/consultations/index'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /create' do
    it 'returns http success' do
      get '/api/v1/consultations/create'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /destroy' do
    it 'returns http success' do
      get '/api/v1/consultations/destroy'
      expect(response).to have_http_status(:success)
    end
  end
end
